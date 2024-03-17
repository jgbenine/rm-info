"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardView } from "./ui/componentes/partials/Cards/CardView";
import { Loading } from "./ui/componentes/Loading";
import { ButtonLoad } from "./ui/componentes/partials/Buttons/ButtonLoad";
import { Header } from "./ui/componentes/partials/Header";
import { fetchCharacterDataByPage } from "./data/api/axiosConfig";
import { useState } from "react";
import { useQuery } from "react-query";

interface CharacterData {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}

export default function Home() {
  // const { results: dataCharactersForPage } = await fetchCharacterDataByPage(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCharactersForPage, setDataCharactersForPage] = useState<
    CharacterData[]
  >([]);

  const { data, isLoading, refetch } = useQuery(
    ["characterData", currentPage],
    () => fetchCharacterDataByPage(currentPage),
    {
      onSuccess: (data) => {
        setDataCharactersForPage((prevData) => [...prevData, ...data.results]);
      },
    }
  );

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    refetch();
  };

  return (
    <ChakraProvider>
      <Header />
      <main className="py-10 min-h-screen items-center w-full">
        {dataCharactersForPage !== null ? (
          <div>
            <Box
              pt="6rem"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap="35px"
              // maxW="1120px"
              w="full"
              position="relative"
              margin="auto"
              className="containerMain"
            >
              <>
                {dataCharactersForPage?.map((element: any, index: number) => (
                  <CardView
                    key={index}
                    id={element?.id}
                    name={element?.name}
                    avatar={element?.image}
                    species={element?.species}
                    gender={element?.gender}
                    status={element?.status}
                  />
                ))}
              </>
              <ButtonLoad
                onScrollToBottom={handleLoadMore}
                isLoadingMore={isLoading}
              />
            </Box>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </ChakraProvider>
  );
}
