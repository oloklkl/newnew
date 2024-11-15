import Image from 'next/image';

// 함수 선언식 (기명 함수)
function func1() {
    <div>함수 선언식</div>;
}

// 함수 표현식 (익명 함수)
const func2 = function () {
    <div>함수 선언식</div>;
};

// 화살표 함수
const Func3 = () => {
    <div>함수 선언식</div>;
};

export default function Home() {
    console.log(true ? '참' : '거짓');

    const bool = false;
    const obj = {
        name: '홍길동',
        age: 20,
    };
    const user = {
        weight: 70,
        height: 180,
    };

    const array = ['menu1', 'menu2', 'menu3'];

    const users = [
        { name: '겨울', age: 2 },
        { name: '가을', age: 3 },
        { name: '여름', age: 1 },
    ];

    const info = {
        name: '홍길동',
        phone: 'ㅇㅇㅇ', // null은 값이 없음을 의미
    };

    return (
        <div>
            {/* or 연산자는 처음 만나는 참값을 출력 */}
            {info.name}의 전화번호는 {info.phone || '폰번호 없음'}입니다.
            {/* 컴포넌트 호출 */}
            {/* <Func1 />
            <Func2 />
            <Func3 /> */}
            <ul>
                {users.map((item, index) => (
                    // const item = users[0];
                    // const item = users[1];
                    // const item = users[2];

                    <li key={index}>
                        {item.name}이는 {item.age}살 입니다.
                    </li>
                ))}
            </ul>
            <ul>
                {/* map() 메서드를 사용해서 반복 */}
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {array[0]}
            {array[1]}
            {array[2]} <br />
            {/* 나의 배우자는 1명이고 자식은 2명이다 */}
            나의 배우자는 {array[0]}명이고 자식은 {array[1]}명이다
            <hr />
            {bool ? '참' : '거짓'} <br />
            {obj.name}
            {obj.age} <br />
            {obj.name}은 {obj.age}살 입니다. <br />
            {/* 김겨울의 몸무게는 70kg이고 키는 180cm 입니다. */}
            김겨울의 몸무게는 {user.weight}kg이고 키는 {user.height}cm 입니다.
        </div>
    );
}
