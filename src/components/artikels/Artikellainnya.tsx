import React from 'react';

const Artikellainnya = () => {
  const articles = [
    {
      id: 1,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
    {
      id: 2,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
    {
      id: 3,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
  ];

  return (
    <div className='mx-0 sm:mx-5'>
      <h3 className='sm:text-2xl mt-5  text-lg font-bold'>Artikel Lainnya</h3>
      {articles.map((article) => (
        <React.Fragment key={article.id}>
          <p className='xl:text-lg text-sm my-2 sm:my-5'>{article.title}</p>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Artikellainnya;
