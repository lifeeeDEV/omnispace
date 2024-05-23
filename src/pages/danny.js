import { Text } from "@chakra-ui/react";
import { Button, Container, IconButton, Link } from "@mui/material";
import { Html } from "next/document";

export default function danny() {

    return (

        <Container className="mt-4 mb-4 bg-400-g bg-gray-800 rounded">
            <Text className="centered mt-5 mb-5 justify-center">Don't click this button below</Text>
            <Link href="/">  
                <IconButton>Do not click me!</IconButton>
            </Link>

            <Link href="https://google.com">Click me instead</Link>      
        </Container>

    );
}