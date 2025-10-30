import { Box, Button, Text } from "@chakra-ui/react"
import { executeCode } from "./api";
import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue() || "";
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      console.log(result);
      setOutput(result.output);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return <Box w={"50%"}>
    <Text mb={2} fontSize={"lg"}>Output</Text>
    <Button
      variant={"outline"}
      colorScheme={"green"}
      mb={4}
      bg={"#FFF"}
      onClick={() => runCode()}
      loading={isLoading}
    >Run Code</Button>
    <Box height={"75vh"}
      p={2}
      border={"1px solid"}
      borderColor={"#333"}
      borderRadius={4}
    >
      {output ? output : 'Click "Run Code" to see the output here.'}
    </Box>
  </Box>;
};

export default Output;
