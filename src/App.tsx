import React, { FormEvent, useEffect, useState } from 'react';
import { Box, Input, Heading, Text, Flex } from '@chakra-ui/react';

export default function App() {
  const [typingStats, setTypingStats] = useState('Online');
  const [typingText, setTypingText] = useState('');
  const [message, setMessage] = useState(String);

  const handleOnChange = (value: string) => {
    setTypingText(value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(typingText.trim());
    setTypingText('');
  };

  useEffect(() => {
    setTimeout(() => {
      setTypingStats('Online');
    }, 2000);

    if (typingText) {
      setTypingStats('Typing');
    }
  }, [typingText]);

  return (
    <Box margin={'auto'} w="50%" p={5}>
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading as="h2" size={'lg'}>
          Typing Status
        </Heading>
        <Text>Status : {typingStats}</Text>

        <form style={{ width: '100%' }} onSubmit={(e) => handleOnSubmit(e)}>
          <Flex w={'100%'} gap={'2'}>
            <Input w={'80%'} value={typingText} onChange={(e) => handleOnChange(e.target.value)} placeholder="Write a message !" />
            <Box w={'20%'} as="button" bg="tomato" color={'white'} rounded={'md'}>
              Send
            </Box>
          </Flex>
        </form>
      </Flex>

      {message && (
        <Box paddingX={5} paddingY={3} rounded={'md'} color={'white'} marginTop={'10px'} bg="gray.500">
          <Flex>
            <Box>
              <Heading as={'h2'} size={'md'}>
                User
              </Heading>
              <Text>{message}</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
