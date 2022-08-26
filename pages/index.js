import Publication from "@/ui/components/Publication/Publication";
import React from "react";
import axiosReq from "utils/axiosReq";

export default function Me({ data, error, loaded }) {
  if (loaded) {
    console.log(data.data || error);
  }
  return <main>{loaded ? <Publication /> : <p>loading</p>}</main>;
}

export async function getStaticProps(context) {
  const url = `${process.env.API_URL}/users`;

  const { data, error, loaded } = await axiosReq(url, "get");

  return {
    props: {
      revalidate: 10,
      data,
      error,
      loaded,
    },
  };
}
