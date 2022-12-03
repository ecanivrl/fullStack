// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Ecani Vrl", age: 28, job: "Web Developer" },
    { id: 2, name: "Ebubekir  Rzgr", age: 26, job: "Web Developer" },
    { id: 3, name: "Suat Yrgc", age: 25, job: "Web Developer" },
    { id: 4, name: "Ömer Bytkn", age: 29, job: "Lawyer" },
  ])
}
