import {
  Card,
  CardBody,
  Box,
  Text,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { fetchDefault } from "@/app/data/api/axiosConfig";
import { ModalViewContent } from "./ModalCard";
import { CharacterData } from '../../../data/hooks/ContextData'
import { CardDetails } from "./CardDetails";

interface cardProps {
  id: number;
  avatar: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}

export function CardView(props: cardProps) {
  const [selectedCharacterData, setSelectedCharacterData] =
    useState<CharacterData | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleEventCard(id: number) {
    async function fetchDetailsCharacter() {
      try {
        const response = await fetchDefault.get(`/character/${id}`);
        const data = await response.data;
        setSelectedCharacterData(data);
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchDetailsCharacter();
    onOpen();
  }

  return (
    <>
      {selectedCharacterData !== null ? (
        <ModalViewContent
          isOpen={isOpen}
          onClose={onClose}
          characterData={selectedCharacterData}
        />
      ): null}
      <Card
        p="20px"
        w="250px"
        h="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        cursor="pointer"
        borderRadius="3xl"
        border="1px solid transparent"
        className="font-montserrat hover:transition-all duration-75 animaLeft"
        onClick={() => handleEventCard(props.id)}
        _hover={{ border: "3px solid #00b5cc" }}
      >
        <Avatar name="Avatar" size="xl" src={props.avatar} showBorder={true} border="1px solid cyan" />
        <CardBody>
          <Text fontSize={16} textAlign="center" fontWeight="bold">
            {props.name}
          </Text>
          <Box display="flex" gap={1} flexDirection="column" paddingTop={2}>
            <CardDetails 
              labelInfo="Specie"
              content={props.species}
            />
            <CardDetails 
              labelInfo="Gender"
              content={props.gender}
            />
            <CardDetails 
              labelInfo="Status"
              content={props.status}
            />
          </Box>
        </CardBody>
      </Card>
    </>
  );
}