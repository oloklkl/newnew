import Image from 'next/image';

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

    const array = [1, 2, 3];

    return (
        <div>
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
