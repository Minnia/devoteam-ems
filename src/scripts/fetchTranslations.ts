import fs from "fs";
import path from "path";

const SHEETDB_API = "https://sheetdb.io/api/v1/w7u9huqxtmhja";
const OUTPUT_DIR = path.join(process.cwd(), "src", "locales");

interface Translation {
  translation_key: string;
  EN: string;
  SV: string;
}

async function fetchTranslations() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log("Fetching translations from SheetDB...");
    const response = await fetch(SHEETDB_API);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const translations: Translation[] = await response.json();

    const enTranslations: { [key: string]: string } = {};
    const svTranslations: { [key: string]: string } = {};

    translations.forEach((item) => {
      if (item.translation_key) {
        enTranslations[item.translation_key] = item.EN;
        svTranslations[item.translation_key] = item.SV;
      } else {
        console.error(
          `Skipping translation with undefined key: ${JSON.stringify(item)}`
        );
      }
    });

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "en.json"),
      JSON.stringify(enTranslations, null, 2)
    );

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "sv.json"),
      JSON.stringify(svTranslations, null, 2)
    );

    console.log("✅ Translations updated successfully!");
    console.log(`📁 Files written to: ${OUTPUT_DIR}`);
    console.log(`📝 Total translations: ${Object.keys(enTranslations).length}`);
  } catch (error) {
    console.error("❌ Error fetching translations:", error);
    process.exit(1);
  }
}

fetchTranslations();
