import { LANGUAGE_VERSIONS, type Language } from "@/constants";
import { Box, Text, Menu, Portal, Button } from "@chakra-ui/react";
import type { FC } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS) as [Language, string][];

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: Language) => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  language,
  onSelect,
}) => {
  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Language:{" "}
      </Text>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {language}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {languages.map(([language, version]) => (
                <Menu.Item
                  key={language}
                  value={language}
                  onClick={() => onSelect(language)}
                >
                  {language}
                  &nbsp;
                  <Text as={"span"} color={"gray.600"} fontSize={"sm"}>
                    {version}
                  </Text>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default LanguageSelector;
