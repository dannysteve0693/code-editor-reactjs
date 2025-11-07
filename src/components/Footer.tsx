import { Box, Center } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Center>
            <Box mt={3}>
                <p>
                    Created with ❤️ by <a href="https://dannyhive.my.id" className="text-blue-400 hover:underline">Danny</a>© {new Date().getFullYear()} | Made for developers, free for everyone. | If you like this project, consider sharing or supporting it 🙌
                </p>
            </Box>

        </Center>
    );
};

export default Footer;