// rafce
import axios from "axios"
import striptags from "striptags"
import React, { useEffect, useState } from 'react'
import { Button } from "primereact/button"
import { IconField } from "primereact/iconfield"
import { InputIcon } from "primereact/inputicon"
import { InputText } from "primereact/inputtext"

const Busca = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])

    // useEffect(() => {
    //     console.log("Executando todas as vezes...")
    // })

    // useEffect(() => {
    //     console.log("Executando somente uma vez...")
    // }, [])

    // useEffect(() => {
    //     console.log("Executando da primeira vez e quando o termo foi atualizado")
    // }, [searchTerm])

    // useEffect(() => {
    //     console.log("Causando um efeito colateral")
    //     return () => {
    //         console.log("Posso 'limpar' algo deixado para trás...")
    //     }
    // })

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    srsearch: searchTerm
                }
            })
            setResults(data?.query?.search)
            console.log(data)
        }
        const timeoutId = setTimeout(() => {
            if (searchTerm) search()
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [searchTerm])

    return (
        <div>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText
                    placeholder="Buscar..."
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm} />
            </IconField>
            {
                results?.map((result) => {
                    return (
                        <div
                            key={result.pageid}
                            className="my-2 border border-1 border-400">
                            <div
                                className="border-bottom border border-1 border-400 p-3 text-center font-bold">
                                {result.title}
                                <span>
                                    <Button
                                        icon="pi pi-send"
                                        className="ml-3 p-button-rounded p-button-secondary"
                                        onClick={() => {
                                            window.open(`https://en.wikipedia.org?curid=${result.pageid}`)
                                        }} />
                                </span>
                            </div>
                            <div
                                className="p-4">
                                <span
                                    dangerouslySetInnerHTML={{ __html: result.snippet }}>
                                </span>
                                ...
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Busca