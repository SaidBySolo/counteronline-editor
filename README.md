# CounterOnline Patch Noter

## 설명

이 프로젝트는 카운터 온라인에서 작성되는 패치노트를 쉽고 편하게 작성하기 위해 시작되었습니다.

아래 항목에 구문들이 설명되어있으니 한번읽어보시길 바랍니다.

## 문법

이 항목에서는 문법을 다룹니다.

모든 문법은 ``/``로 시작하며

글을 시작하거나 마무리할때는 ``;``를 사용합니다.

모든 구문은 소문자입니다.

### Metadata

메타 데이터 구역은 항상 첫 번째 줄에 들어가야 합니다.

날짜의 예시: 오늘이 21년 9월 23일인 경우 20210923

패치번호의 예시: 오늘 하루 동안의 패치 번호를 뜻합니다. 패치의 분야 (게임 서버, 밸런스 패치, etc...)

상관없이 첫 번째 패치일 경우 0

두 번째 패치일 경우 1... 순으로 기록합니다.

오늘이 21년 9월 23일이며, 세 번째 패치 게시글인 경우 #20210923.2입니다.

#### 구문

```md
/metadata;#20210923.2;
```

#### 반환값

```md
<meta property="og:description" content="이 게시글은 CounterOnline changelog #20210923.2 패치에 관한 내용을 다루고 있습니다.">
```

### lb

줄바꿈 입니다.

#### 예시

```md
/lb
```

#### 반환값

```md
<p>&nbsp;</p>
```

### Title

이 구역은 대분류로 취급받는 것(무기, 좀비, 데스매치, 공통, 밸런스 등...)으로 작성합니다.

예시: 좀비 v5.0 업데이트, 버전이 존재하지 않는 경우 좀비 업데이트 형식으로 작성

#### 예시

```md
/title;좀비 업데이트;
```

#### 반환값

```md
<p><span style="font-size:28px;"><strong>&nbsp; 좀비 업데이트</strong></span></p>
<h5><span style="font-size:20px; color:#999999;"><strong><strike>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strike></strong></span></h5>
```

### Category

이 구역은 소분류로 취급받는 것(Content, Balance, Bug Patch, Etc 등...)으로 작성합니다.

#### 예시

```md
/category;Content;
```

#### 반환값

```md
<h5 style="font-weight:800; font-size:22px;">&nbsp; &nbsp; Content</h5>
```

### Content

이 구역은 패치의 세부 사항을 작성합니다.

이 구역에서는 색 및 타입을 지정해야합니다.

타입을 지정하는방법은 대표적으로 세 가지가 있는데

무언가가 제거되는 경우 ``minus``

무언가가 새롭게 추가되는 경우 ``plus``

무언가가 변경된 경우 ``check``를 사용합니다.

색을 지정하는 방법은

Hex로 컬러코드를 입력하거나 단색을 입력해주시면 됩니다.

아래 예시를 참고해주세요.

#### 예시

```md
/content;알 수 없는 출처의 "G큐브" 맵이 제거되었습니다. setType="minus" setColor="black";
```

#### 반환값

```md
<p><span style="font-size:16px;color:black"><span class="fas fa-minus"> </span> 알 수 없는 출처의 &quot;G큐브&quot; 맵이 제거되었습니다.   </span></p>
```

### 추가정보

이 구역은 소분류로 취급받는 것(Content, Balance, Bug Patch, Etc 등...)으로 작성합니다.

#### Img

이미지를 삽입합니다.

Alt 항목 에는 사진 설명을 입력해야하고

Src 항목에는 이미지 링크를 입력해야합니다.

##### 예시

```md
/img;setAlt="그림설명" setSrc="https://i.imgur.com/mGhbuSC.png";
```

###### 반환값

```md
<p><img alt="그림설명" src="https://i.imgur.com/mGhbuSC.png" style="margin-top:3px;border-radius:15px" width="70%"/></p>
```

#### Blockcontent

인용 입니다.

##### 구문

```md
/blockcontent;내용;
```

###### 반환값

```md
<blockquote><p><span style="font-size:16px">내용</span></p></blockquote>
```

#### Table/End

표 입니다.

표를 시작할때는 ``table``
마칠때는 ``end``를 사용합니다.

취소선이 필요한경우 마크다운양식에 따릅니다. 예: ``~~내용~~``

화살표는 ``->``를 입력할경우 자동으로 치환됩니다.

##### 예시

```md
/table
크리티컬 확률 ~~40%~~ -> 33%
크리티컬 대미지 ~~2~~ -> 1
/end
```

###### 반환값

```md
<ul>
<li><span style="font-size:15px">크리티컬 확률 <s>40%</s> &rarr; 33%</span></li>
<li><span style="font-size:15px">크리티컬 대미지 <s>2</s> &rarr; 1</span></li>
</ul>
```
