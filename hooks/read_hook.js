async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const toolArgs = JSON.parse(Buffer.concat(chunks).toString());

  // Check file path for Read tool
  const readPath =
    toolArgs.tool_input?.file_path || toolArgs.tool_input?.path || "";

  // Check command string for Bash tool
  const command = toolArgs.tool_input?.command || "";

  if (readPath.includes(".env") || command.includes(".env")) {
    console.error("You cannot read the .env file");
    process.exit(2);
  }
}

main();
