import {container, titleStyle
  , line, label, input, row, column, keywordInputWrapper, keywordInputStyle, keywordList, keywordBox, searchbtn, deletebtn
    ,imageBox, image, textarea, input2, fileBtn, buttonRow
} from "./ValueUpload.style"
import { useState } from 'react';
import { Search, Delete, Image } from "@assets/index";
import Buttons from "@components/Button/Buttons";
import usePostValuation from "apis/hooks/value/usePostValuation";
import { useNavigate } from "react-router-dom";

const ValueUpload=() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string[]>(['#바람막이', '#마우스']);
  const [categoryInput, setCategoryInput] = useState("");
   const navigate = useNavigate();
  
   const handleCategoryAdd = () => {
    if (categoryInput.trim() && !category.includes(`#${categoryInput}`)) {
      setCategory([...category, `#${categoryInput}`]);
      setCategoryInput('');
    }
  };

  const handleCategoryRemove = (item: string) => {
    setCategory(category.filter(c => c !== item));
  };

 const handleSubmit = async () => {
    const selectedCategory = category[0]?.replace("#", "") || "";

    if (!title || !description || !selectedCategory) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      const res = await usePostValuation({
        title,
        description,
        category: selectedCategory
      });
      alert("게시글이 성공적으로 등록되었습니다.");
      console.log("등록된 postId:", res.postId);
       navigate(`/value`);
    } catch (err) {
      console.error("등록 실패", err);
      alert("게시글 등록에 실패했습니다.");
    }
  };

const handleCancel = () => {
  console.log("취소 버튼 클릭됨");
};

  return(
     <div css={container}>
        <div css={titleStyle}
        >상품 등록</div>
        <div css={line} />
        <label css={label}>상품</label>
         <input
        css={input}
        placeholder="상품 이름을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

     <div css={row}>
        <div css={column}>
            <label css={label}>키워드</label>
            <div css={keywordInputWrapper}>
             <input
              css={keywordInputStyle}
              placeholder="카테고리를 추가하세요. 예) #전자기기"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCategoryAdd()}
            />
            <button onClick={handleCategoryAdd}>
                <Search css={searchbtn} />
            </button>
          </div>

          <div css={keywordList}>
            {category.map((c, i) => (
              <div key={i} css={keywordBox}>
                {c}
                <button onClick={() => handleCategoryRemove(c)}>
                    <Delete css={deletebtn} />
                </button>
              </div>
            ))}
          </div>
          {/* <label css={label}>상품 정가</label>
         <input css={input2} placeholder="금액을 입력하세요." /> */}
        </div>
        <div css={column}>
            <label css={label}>상품 사진</label>
            <div css={imageBox}>
                <Image css={image} />
            </div>
            <button css={fileBtn}>파일 선택</button>
          </div>
        </div>
     

          <label css={label}>상품 설명</label>
       <textarea
        css={textarea}
        placeholder="상품 설명을 입력하세요. 상품의 사용 횟수를 작성해주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <div css={buttonRow}>
        <Buttons text="등록하기" type="filled" onClick={handleSubmit}  />
        <Buttons text="취소하기" type="outlined" onClick={handleCancel} />

      </div>
     </div>
 

    );
};
export default ValueUpload;