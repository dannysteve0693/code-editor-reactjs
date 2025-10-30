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
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:{" "}
      </Text>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" bg={"#FFFFFF"}>
            {language}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {languages.map(([lang, version]) => (
                <Menu.Item
                  key={lang}
                  color={language === lang ? "blue.400" : ""}
                  value={lang}
                  onClick={() => onSelect(lang)}
                >
                  {lang}
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
