import fs from 'node:fs/promises'
import { loadEnv } from 'vite';
import { Client } from "@notionhq/client";

const isProduction = process.env.NODE_ENV === 'production'

let mode;
if (!isProduction) {
  mode = 'development'
} else {
  mode = 'production'
}

const env = loadEnv(mode, process.cwd(), '');

const notionDatabaseId = env.VITE_NOTION_DATABASE_ID;
const notionSecret = env.VITE_NOTION_SECRET;

if (!notionDatabaseId || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

const notion = new Client({
  auth: notionSecret,
});

const getProjects = async () => {
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  const list = query.results.map((row) => {
    // row represents a row in our database and the name of the column is the
    // way to reference the data in that column
    const titleCell = row.properties.title;
    const typeCell = row.properties.type;
    const descriptionCell = row.properties.description;
    const urlCell = row.properties.url;
    const skillsCell = row.properties.skills;
    const assetsCell = row.properties.assets;
    const activeCell = row.properties.active;

    // Depending on the column "type" we selected in Notion there will be different
    // data available to us (URL vs Date vs text for example) so in order for Typescript
    // to safely infer we have to check the `type` value.  We had one text and one url column.
    const isTitle = titleCell.type === "title";
    const isType = typeCell.type === "select";
    const isDescription = descriptionCell.type === "rich_text";
    const isUrl = urlCell.type === "url";
    const isSkills = skillsCell.type === "multi_select";
    const isAssets = assetsCell.type === "multi_select";
    const isActive = activeCell.type === "checkbox";

    // Verify the types are correct
    if (isTitle && isType && isDescription && isUrl && isSkills && isAssets && isActive) {
      // Pull the string values of the cells off the column data
      const title = titleCell.title?.[0].plain_text;
      const url = urlCell.url ?? "";
      const description = descriptionCell.rich_text?.[0].plain_text;
      const type = typeCell.select?.name;
      const skills = skillsCell.multi_select?.map((skill) => skill.name);
      const assets = assetsCell.multi_select?.map((asset) => asset.name);
      const active = activeCell.checkbox;

      return { title, description, url, type, skills, assets, active };
    }

    // If a row is found that does not match the rules we checked it will still return in the
    // the expected shape but with a NOT_FOUND label
    return { title: "NOT_FOUND", url: "" };
  });

  const jsonString = JSON.stringify(list.reverse())
  await fs.writeFile('./src/data/projectsNotion.json', jsonString)
}

getProjects().then(() => {
  console.info('projectsNotion.json: Successfully wrote file')
}).catch((err) => {
  console.info('projectsNotion.json: Error writing file', err)
})

export { getProjects };