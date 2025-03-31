"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import MoistureIcon from "/public/images/icon-72-moisture.svg";
import PoresizeIcon from "/public/images/icon-72-poresize.svg";
import ElasticityIcon from "/public/images/icon-72-elasticity.svg";
import PigmentationIcon from "/public/images/icon-72-pigmentation.svg";
import SebumIcon from "/public/images/icon-72-sebum.svg";
import SensitivityIcon from "/public/images/icon-72-sensitivity.svg";
import RightIcon from "/public/images/icon-chevron-right.svg";
import BarcodeIcon from "/public/images/icon-36-barcode.svg";
import KoreaIcon from "/public/images/icon-40-korea.svg";
import styles from "./sample.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["수분", "모공", "주름", "잡티", "피지", "민감도"],
  datasets: [
    {
      label: "green",
      data: [78, 86, 29, 85, 75, 48],
      backgroundColor: "#74D1184D",
      borderColor: "#74D118",
      borderWidth: 4,
      pointRadius: 8, // 원의 크기 설정
      pointBackgroundColor: "#74D118", // 꼭짓점 원의 배경색
      pointBorderColor: "#74D118", // 원의 테두리 색
      pointBorderWidth: 0, // 원의 테두리 두께
    },
    {
      label: "gray",
      data: [92, 85, 78, 64, 50, 36],
      backgroundColor: "transparent",
      borderColor: "#99A1A8",
      borderWidth: 4,
      pointRadius: 8, // 원의 크기 설정
      pointBackgroundColor: "#99A1A8", // 꼭짓점 원의 배경색
      pointBorderColor: "#99A1A8", // 원의 테두리 색
      pointBorderWidth: 0, // 원의 테두리 두께
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false, // 범례 숨김
    },
    tooltip: {
      enabled: false, // 툴팁 비활성화
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      // startAngle: 180,
      ticks: {
        z: 0,
        display: true, // 숫자 숨김
        min: 0, // 최소값 0으로 설정
        max: 100, // 최대값 3으로 설정
        stepSize: 20, // 각 점수의 간격을 1로 설정
        font: {
          size: 20,
          family: "Pretendard",
          weight: 400,
        },
        color: "#99A1A8",
        backdropColor: "#ffffff",
        backdropPadding: 8,
      },
      angleLines: {
        display: false, // 방사형 선 표시
        borderDash: [5, 5], // 점선 크기와 간격
      },
      grid: {
        circular: true, // 원형 그리드 적용
        lineWidth: 2,
        color: "#C9CDD2", // 그리드 선 색상 설정
      },
      pointLabels: {
        display: false, // 바깥쪽 레이블 표시
      },
    },
  },
};

export default function Home() {
  const labelsWithPositions = [
    { text: "수분감", icon: <MoistureIcon />, angle: 90 },
    { text: "모공크기", icon: <PoresizeIcon />, angle: 30 },
    { text: "탄력도", icon: <ElasticityIcon />, angle: 330 },
    { text: "색소침착", icon: <PigmentationIcon />, angle: 270 },
    { text: "피지분비", icon: <SebumIcon />, angle: 210 },
    { text: "피부민감도", icon: <SensitivityIcon />, angle: 150 },
  ];

  const list = [
    { label: "한국어", prefix: <KoreaIcon /> },
    { label: "영어" },
    { label: "중국어" },
    { label: "일본어" },
  ];

  return (
    <div className="flex flex-col gap-y-4 p-4">
      {/* 컬러 */}
      <div className="border-2 border-gray-15 rounded-lg p-4">
        <h1 className="text-h3 font-bold gray-100 bg-gray-15 rounded-lg px-2 mb-4">
          Color
        </h1>
        <div className="flex flex-col gap-y-2">
          <ul className="grid grid-cols-7 gap-y-2">
            <li className="h-16 bg-black" />
            <li className="h-16 bg-white" />
            <li className="h-16 bg-system-blue" />
            <li className="h-16 bg-system-red" />
            <li className="h-16 bg-system-orange" />
            <li className="h-16 bg-system-yellow" />
            <li className="h-16 bg-coral" />
          </ul>
          <ul className="grid grid-cols-7 gap-y-2">
            <li className="h-16 bg-gray-6" />
            <li className="h-16 bg-gray-8" />
            <li className="h-16 bg-gray-10" />
            <li className="h-16 bg-gray-15" />
            <li className="h-16 bg-gray-20" />
            <li className="h-16 bg-gray-30" />
            <li className="h-16 bg-gray-40" />
            <li className="h-16 bg-gray-50" />
            <li className="h-16 bg-gray-60" />
            <li className="h-16 bg-gray-70" />
            <li className="h-16 bg-gray-80" />
            <li className="h-16 bg-gray-85" />
            <li className="h-16 bg-gray-90" />
            <li className="h-16 bg-gray-100" />
          </ul>
          <ul className="grid grid-cols-7 gap-y-2">
            <li className="h-16 bg-green-20" />
            <li className="h-16 bg-green-30" />
            <li className="h-16 bg-green-50" />
            <li className="h-16 bg-green-pda" />
            <li className="h-16 bg-green-skin" />
            <li className="h-16 bg-green-70" />
            <li className="h-16 bg-green-80" />
          </ul>
          <ul className="grid grid-cols-7 gap-y-2">
            <li className="h-16 bg-dim-black-3" />
            <li className="h-16 bg-dim-black-5" />
            <li className="h-16 bg-dim-black-16" />
            <li className="h-16 bg-dim-black-60" />
            <li className="h-16 bg-dim-black-70" />
            <li className="h-16 bg-dim-black-80" />
          </ul>
          <ul className="grid grid-cols-7 gap-y-2">
            <li className="h-16 bg-dim-white-16" />
            <li className="h-16 bg-dim-white-32" />
            <li className="h-16 bg-dim-white-50" />
            <li className="h-16 bg-dim-white-70" />
            <li className="h-16 bg-dim-white-80" />
          </ul>
        </div>
      </div>
      {/* 타이포그래피 */}
      <div className="border-2 border-gray-15 rounded-lg p-4">
        <h1 className="text-h3 font-bold gray-100 bg-gray-15 rounded-lg px-2 mb-4">
          Typography
        </h1>
        <div className="grid grid-cols-2">
          <ul>
            <li className="text-body3 font-light">Pretendard Light 300</li>
            <li className="text-body3 font-normal">Pretendard Regular 400</li>
            <li className="text-body3 font-semibold">
              Pretendard SemiBold 600
            </li>
            <li className="text-body3 font-bold">Pretendard Bold 700</li>
          </ul>
          <ul className="flex flex-col text-gray-100">
            <li className="text-display">Display. 진단기기</li>
            <li className="text-h1">H1. 진단기기</li>
            <li className="text-h2">H2. 진단기기</li>
            <li className="text-h3">H3. 진단기기</li>
            <li className="text-body1">Body1. 진단기기</li>
            <li className="text-body2">Body2. 진단기기</li>
            <li className="text-body3">Body3. 진단기기</li>
            <li className="text-body4">Body4. 진단기기</li>
            <li className="text-caption">Caption. 진단기기</li>
          </ul>
        </div>
      </div>
      {/* 레이더차트 */}
      <div className="border-2 border-gray-15 rounded-lg p-4">
        <h1 className="text-h3 font-bold gray-100 bg-gray-15 rounded-lg px-2 mb-4">
          Rador Chart
        </h1>
        <div className="relative p-[240px] w-fit">
          <div className="w-[520px] aspect-square relative">
            <Radar data={data} options={options} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            {labelsWithPositions.map((labelData, index) => {
              // 각 레이블 위치 계산
              const radius = 400; // 레이더 반지름
              const top = radius * Math.sin((labelData.angle * Math.PI) / 180);
              const left = radius * Math.cos((labelData.angle * Math.PI) / 180);
              // green과 gray 값 가져오기
              const greenValue = data.datasets[0].data[index]; // 첫 번째 데이터셋 (green)
              const grayValue = data.datasets[1].data[index]; // 두 번째 데이터셋 (gray)
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center shrink-0 text-center -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: `calc(50% - ${top}px)`,
                    left: `calc(50% + ${left}px)`,
                  }}
                >
                  {labelData.icon}
                  <p className="text-body3 font-bold mt-3">{labelData.text}</p>
                  <div className="flex items-center gap-x-2 text-body3 font-bold">
                    <span className="text-gray-100">{greenValue}</span>
                    <span className="text-gray-30">/</span>
                    <span className="text-gray-60">{grayValue}</span>
                  </div>
                  <button className="flex items-center gap-x-1 mt-1 text-caption text-gray-80 leading-none">
                    촬영 사진 보기
                    <RightIcon
                      className="fill-current text-gray-80"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 버튼 */}
      <div className="border-2 border-gray-15 rounded-lg p-4">
        <h1 className="text-h3 font-bold gray-100 bg-gray-15 rounded-lg px-2 mb-4">
          Button
        </h1>
        <div className="grid grid-cols-4 items-center gap-4">
          <Button color="black" size="sm" label="button" block />
          <Button color="gray" size="sm" label="button" block />
          <Button color="white" size="sm" label="button" block />
          <Button color="outline" size="sm" label="button" block />
          <Button color="black" size="sm" label="button" block disabled />
          <Button color="gray" size="sm" label="button" block disabled />
          <Button color="white" size="sm" label="button" block disabled />
          <Button color="outline" size="sm" label="button" block disabled />
          <Button
            color="black"
            size="sm"
            label="button"
            block
            round
            prefix={<BarcodeIcon className="fill-current text-white" />}
          />
          <Button
            color="black"
            size="sm"
            label="button"
            block
            round
            suffix={<BarcodeIcon className="fill-current text-white" />}
          />
          <Button
            color="black"
            size="sm"
            label="button"
            block
            round
            prefix={<BarcodeIcon className="fill-current text-white" />}
            suffix={<BarcodeIcon className="fill-current text-white" />}
          />
          <Button
            color="black"
            size="sm"
            label="button"
            block
            round
            disabled
            prefix={<BarcodeIcon className="fill-current text-white" />}
            suffix={<BarcodeIcon className="fill-current text-white" />}
          />
          <Button color="black" size="lg" label="button" block />
          <Button color="black" size="md" label="button" block />
          <Button color="black" size="sm" label="button" block />
          <Button color="black" size="xs" label="button" block />
          <Button color="black" size="lg" label="button" type="text" />
          <Button color="black" size="lg" label="button" type="more" />
          <Button color="gray" size="md" label="button" type="more" />
          <Button color="gray" size="sm" label="button" type="more" disabled />
          <Button
            color="white"
            size="sm"
            label="한국어"
            type="language"
            block
            round
            prefix={<KoreaIcon />}
          />
          <Button
            color="white"
            size="sm"
            label="한국어"
            type="language"
            block
            round
            disabled
            prefix={<KoreaIcon />}
          />
        </div>
      </div>
      {/* 드롭다운 */}
      <div className="border-2 border-gray-15 rounded-lg p-4">
        <h1 className="text-h3 font-bold gray-100 bg-gray-15 rounded-lg px-2 mb-4">
          Dropdown
        </h1>
        <Dropdown
          label="선택을할까말까해야겠지길어지면이렇게돼요"
          list={list}
        />
      </div>
    </div>
  );
}
