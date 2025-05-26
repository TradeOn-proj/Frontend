import {container, title, line, label, input, row, column, keywordInputWrapper, keywordInputStyle, keywordList, keywordBox, searchbtn, deletebtn
    ,imageBox, image, textarea, input2, fileBtn, buttonRow
} from "./Upload.style"
import { useState } from 'react';
import { Search, Delete, Image } from "@assets/index";
import Buttons from "@components/Button/Buttons";

const Upload=() => {
  const [keywords, setKeywords] = useState<string[]>(['#바람막이', '#바람막이']);
  const [keywordInput, setKeywordInput] = useState('');
  
  const handleKeywordAdd = () => {
    if (keywordInput.trim() && !keywords.includes(`#${keywordInput}`)) {
      setKeywords([...keywords, `#${keywordInput}`]);
      setKeywordInput('');
    }
  };

  const handleKeywordRemove = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleSubmit = () => {
   console.log("상품 등록 시도");
};

const handleCancel = () => {
  console.log("취소 버튼 클릭됨");
};

  return(
     <div css={container}>
        <div css={title}>상품 등록</div>
        <div css={line} />
        <label css={label}>상품</label>
        <input css={input} placeholder="상품 이름을 입력하세요." />
     <div css={row}>
        <div css={column}>
            <label css={label}>키워드</label>
            <div css={keywordInputWrapper}>
            <input
              css={keywordInputStyle}
              placeholder="키워드를 추가하세요. 예) #의류 #바람막이"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleKeywordAdd()}>
                
              </input>
            <button onClick={handleKeywordAdd}>
                <Search css={searchbtn} />
            </button>
          </div>

          <div css={keywordList}>
            {keywords.map((k, i) => (
              <div key={i} css={keywordBox}>
                {k}
                <button onClick={() => handleKeywordRemove(k)}>
                    <Delete css={deletebtn} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div css={column}>
            <label css={label}>상품 사진</label>
            <div css={imageBox}>
                <Image css={image} />
            </div>
            <button css={fileBtn}>파일 선택</button>
          </div>
        </div>
         <label css={label}>거래 장소</label>
         <input css={input2} placeholder="거래 장소를 입력하세요." />

          <label css={label}>상품 설명</label>
      <textarea css={textarea} placeholder="상품 설명을 입력하세요." />
      
      <div css={buttonRow}>
        <Buttons text="등록하기" type="filled" onClick={handleSubmit}  />
        <Buttons text="취소하기" type="outlined" onClick={handleCancel} />

      </div>
     </div>
 

    );
};
export default Upload;