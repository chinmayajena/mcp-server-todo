import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "TODO",
  version: "1.0.0",
});

//Adding tools
server.tool(
  "add-todo",
  "Add a task to your Todo List",
  {
    text: z.string(),
  },
  async ({ text }) => {
    return {
      content: [
        {
          type: "text",
          text: `${text} is added to Todo List`,
        },
      ],
    };
  }
);

//Adding tools
server.tool(
  "get-todo",
  "Get all your Task",
  {
    text: z.string(),
  },
  async ({ text }) => {
    return {
      content: [
        {
          type: "text",
          text: `${text} is added to Todo List`,
        },
      ],
    };
  }
);

//start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
