import React, { useEffect, useState } from 'react';

const Prefetch = () => {
  
  useEffect(() => {
    // Bạn có thể thêm logic để preload tài nguyên ở đây nếu cần
  }, []);

  return (
    <div>
      {/* <link rel="preload" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX_2ou042muI0KTm2n3JjIzNPs7ERnq9_Vw&s" as="image" /> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX_2ou042muI0KTm2n3JjIzNPs7ERnq9_Vw&s" alt="Preloaded Image" />
    </div>
  );
};

export default Prefetch;