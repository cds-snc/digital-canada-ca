import fetch from "node-fetch";
import fs from "fs";
import { parse } from "node-html-parser";
import yaml from "js-yaml";

const publicURL = "https://jobs.lever.co/tbs-sct";
const directory = "../../../content/en/careers/positions/";

const parseFile = (fileName) => {
  try {
    const fileContents = fs.readFileSync(fileName, "utf8");
    const data = fileContents.toString().split("---")[1];
    const metadata = yaml.load(data);

    if (!metadata["archived"]) return metadata["leverId"];

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const parseActivePositions = () => {
  const files = fs.readdirSync(directory);
  const ids = files
    .map((file) => parseFile(`${directory}/${file}`))
    .filter((value) => !!value);
  return ids;
};

const getActivePositions = async () => {
  const response = await fetch(publicURL);
  const body = await response.text();
  const root = parse(body);
  const postings = root.querySelectorAll("div[data-qa-posting-id]");
  return postings.map((posting) => posting.getAttribute("data-qa-posting-id"));
};

const run = async () => {
  const ids = parseActivePositions();
  const active = await getActivePositions();
  const diff = ids.filter((id) => !active.includes(id));

  if (diff.length > 0) {
    console.log(`${diff} positions are not listed as active in Lever`);
    process.exit(1);
  } else {
    console.log("All positions are listed as active");
    process.exit(0);
  }
};

run();
