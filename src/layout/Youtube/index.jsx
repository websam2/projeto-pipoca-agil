import React from "react";
import Card from "@/components/Card";
import videos from "@/json/canalIbson.json";

export default function Youtube() {
  const [search, setSearch] = React.useState("");

  // const [videos, setVideos] = React.useState([
  //   { id: "fABmG8pShwY", title: "Pipoca Failed Ágil - Lançamento" },
  //   { id: "cKkZOwQb8gQ", title: "Pipoca Agil Responde!" },
  //   { id: "QT246Evv2OI", title: "Pipoca Agil Responde!" },
  //   { id: "LofPxJyicXE", title: "O Agilista dono do Time" },
  //   { id: "wR15AkpsgCE", title: "Me paga um café" },
  // ]);

  const searchVideos = videos.filter((video) => video.id.includes(search));

  return (
    <div className="flex flex-col max-w-7xl justify-center items-center p-4">
      <section className="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold text-white text-3xl m-4">
          Ouça as nossas produções
        </h1>
        <input
          className="input input-bordered w-72 m-4"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar"
        />
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
          <Card id={video.id} key={video.id} />
        ))}
      </section>
    </div>
  );
}
