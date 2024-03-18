"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardView } from "./ui/componentes/partials/Cards/CardView";
import { Loading } from "./ui/componentes/Loading";
import { ButtonLoad } from "./ui/componentes/partials/Buttons/ButtonLoad";
import { Header } from "./ui/componentes/partials/Header/Header";
import {
  fetchCharacterDataByPage,
  fetchCharacterDataBySearch,
} from "./data/api/axiosConfig";
import { useState } from "react";
import { useQuery } from "react-query";
import { Microscope } from "lucide-react";

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
  const [dataCharacters, setDataCharacters] = useState<CharacterData[]>([]);
  const [dataSearchCharacters, setDataSearchCharacters] = useState<
    CharacterData[]
  >([]);
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading, refetch } = useQuery(
    ["characterData", currentPage, searchInput],
    () => {
      if (searchInput) {
        setCurrentPage(1);
        setDataSearchCharacters([]);
        return fetchCharacterDataBySearch(currentPage, searchInput);
      } else {
        return fetchCharacterDataByPage(currentPage);
      }
    },
    {
      onSuccess: (data) => {
        if (searchInput) {
          setDataSearchCharacters((prevData) => [...prevData, ...data.results]);
        } else {
          setDataCharacters((prevData) => [...prevData, ...data.results]);
        }
      },
    }
  );

  const handleSearchSubmit = (searchTerm: string) => {
    if (searchTerm) {
      setDataCharacters([]);
    }
    setSearchInput(searchTerm);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    refetch();
  };

  return (
    <ChakraProvider>
      <Header onSearchSubmit={handleSearchSubmit} />
      <main className="pt-10 pb-20 min-h-screen items-center w-full">
        {dataCharacters || dataSearchCharacters ? (
          <div>
            <Box
              pt="4rem"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap="35px"
              w="full"
              position="relative"
              margin="auto"
              className="containerMain"
            >
              <>
                {searchInput &&
                dataSearchCharacters &&
                dataSearchCharacters.length > 0
                  ? dataSearchCharacters.map((element: any, index: number) => (
                      <CardView
                        key={index}
                        id={element?.id}
                        name={element?.name}
                        avatar={element?.image}
                        species={element?.species}
                        gender={element?.gender}
                        status={element?.status}
                      />
                    ))
                  : dataCharacters.map((element: any, index: number) => (
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
              {data?.info?.next !== null ? (
                <ButtonLoad
                  onScrollToBottom={handleLoadMore}
                  isLoadingMore={isLoading}
                />
              ) : (
                <p className="text-sm text-center m-4 flex self-center text-sky-800 absolute bottom-[-70px]">
                  You viewed all the data
                  <Microscope height={15} />
                </p>
              )}
            </Box>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </ChakraProvider>
  );
}
