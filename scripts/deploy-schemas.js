import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "pqp441pm",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function deploySchemas() {
  try {
    console.log("🚀 Deploying schemas to Sanity project: pqp441pm")

    // Test connection
    const projects = await client.projects.list()
    console.log("✅ Successfully connected to Sanity")

    console.log("📋 Your schemas are ready to be deployed!")
    console.log("Next steps:")
    console.log("1. Get your API token from: https://sanity.io/manage")
    console.log("2. Add it to your .env.local file")
    console.log("3. Run: npx sanity deploy")
    console.log("4. Access your studio at: http://localhost:3000/studio")
  } catch (error) {
    console.error("❌ Error connecting to Sanity:", error.message)
    console.log("Make sure you have:")
    console.log("- Valid API token in .env.local")
    console.log("- Correct project ID: pqp441pm")
  }
}

deploySchemas()
