"use client";

import React from "react";
import CardYoutube from "@/components/CardYoutube";
import videos from "@/json/canalIbson.json";
import { Input, Button } from "@material-tailwind/react";
import SearchIcon from "@/assets/icons/search.svg";
import Title from "@/components/Title3xl";

export default function Youtube() {
  const [search, setSearch] = React.useState("");

  // const [videos, setVideos] = React.useState([
  //   { id: "fABmG8pShwY", title: "Pipoca Failed Ágil - Lançamento" },
  //   { id: "cKkZOwQb8gQ", title: "Pipoca Agil Responde!" },
  //   { id: "QT246Evv2OI", title: "Pipoca Agil Responde!" },
  //   { id: "LofPxJyicXE", title: "O Agilista dono do Time" },
  //   { id: "wR15AkpsgCE", title: "Me paga um café" },
  // ]);

  const [searchInput, setSearchInput] = React.useState("");
  const onChange = ({ target }) => setSearchInput(target.value);

  const searchVideos = videos.filter((video) => video.id.includes(search));

  return (
    <div className="flex flex-col text-white max-w-7xl justify-center items-center pt-20 pb-20">
      <section className="flex flex-row justify-between items-center w-full pb-10">
        <Title title="Ouça as nossas produções" />
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            type="search"
            label="Buscar vídeos"
            value={searchInput}
            onChange={onChange}
            className="pr-20 bg-gray-light"
            color="black"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={searchInput ? "deep-orange" : "deep-purple"}
            disabled={!searchInput}
            className="!absolute right-1 top-1 rounded"
          >
            enviar
          </Button>
        </div>
        {/* <input
          className="input input-bordered w-72 m-4"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar"
        /> */}
      </section>

      <img
        className="m-4 w-1/2 rounded-lg"
        src="https://img.youtube.com/vi/LofPxJyicXE/maxresdefault.jpg"
        alt="cover"
      />

      {/* PARA ACESSAR OS CONTEUDOS DO YOUTUBE */}
      <section className="flex flex-row items-center justify-center gap-4">
        {/* 
        {videos
          .filter((video) => video.propriedade === valor)
          .map((video) => (
            <Card id={video.id} key={video.id} />
          ))} */}

        {videos.map((video) => (
          <CardYoutube id={video.id} key={video.id} />
        ))}
      </section>
    </div>
  );
}
