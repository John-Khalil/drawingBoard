'use client';

import { Contrail_One } from 'next/font/google';
import { useParams } from 'next/navigation';

export default function Board(props:object) {
  const params = useParams();
  const id = params.id;

  return <h1>Board ID : {id}</h1>;
}
