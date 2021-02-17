const axios=require('axios');
const cheerio=require('cheerio');
require('dotenv').config();

exports.browseWord=async(req,res)=>{
    const word=req.params.word;
    try {
        const response=await axios(`https://www.dictionary.com/browse/${word}`);
        const $=cheerio.load(response.data)
        const title=$('.css-2m2rhw.e1wg9v5m4').eq(0).text();
        const itemFromList=$('.css-1o58fj8.e1hk9ate4 div');
        const audioSrc=$('audio source').attr('src');

        const definitionOfWord=[];
        itemFromList.each((index)=>{
            definitionOfWord.push(`${index+1}. ${itemFromList.eq(index).text()}`)
        })
        res.status(200).json(
            {
                msg:'success',
                word:title,
                audio:audioSrc,
                definition:definitionOfWord,
                self:{
                    link:`https://www.dictionary.com/browse/${word}`
                }
            }
            )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:error,
        })
    }
    
}


exports.aboutApi=(req,res)=>{
    endpoint=process.env.ENDPOINT;
    source=process.env.SOURCE;
    example=process.env.EXAMPLE
    res.status(200).json({
        endpoint,
        source,
        example
    })
}