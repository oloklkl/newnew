import React from 'react';

// 함수 선언식
function Func1() {
    return <div>function1 출력</div>;
}

const Func2 = () => {
    return <div>function2 출력</div>;
};

const Button = ({ name, color }) => {
    // const { name, color } = props;

    // console.log(props);

    return (
        <button
            className={`p-5 bg-blue-200 mr-2 hover:bg-red-100 first:bg-green-100 last:bg-violet-100 ${
                color ? 'text-white' : 'text-black'
            }`}
            title={name}
        >
            {name}
        </button>
    );
};

// grid 잡는 아이
const Inner = ({ children }) => {
    return <div className='max-w-[600px] w-full m-auto bg-pink-50'>{children}</div>;
};

const Func7 = ({ name, desc }) => {
    return (
        <div>
            {name}는 겁나 {desc}
        </div>
    );
};

export const page = () => {
    const arr = [
        { name: '리액트', desc: '재미있어' },
        { name: '리액트', desc: '어려워' },
        { name: '리액트', desc: '쉬워' },
    ];

    const arr2 = { name: '리액트', desc: '재미있어.' };
    // const arr3 = { name: '리액트', desc: '어려워.' };
    // const arr4 = { name: '리액트', desc: '쉬워.' };

    return (
        <div>
            <h1>function</h1>
            <Inner>
                <Func7 {...arr2} />

                {/* 리액트에서는 map() 메서드로 반복해준다. */}
                {arr.map(({ name, desc }, index) => (
                    //    const {name, desc} = item,

                    <Func7 key={index} name={name} desc={desc} />
                ))}

                <div>
                    <Button name='확인' />
                    <Button name='취소' color />
                    <Button name='취소' />
                    <Button name='취소' />
                </div>

                <Func1 />
                <Func2 />
            </Inner>
        </div>
    );
};

export default page;
