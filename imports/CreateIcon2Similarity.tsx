import svgPaths from "./svg-w7sg2erex4";

function Icon() {
  return (
    <div className="basis-0 grow h-[43px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[12.5%_12.5%_20.83%_12.5%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
            <path d={svgPaths.pa56f640} fill="url(#paint0_linear_28_421)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_421" x1="0" x2="0" y1="0" y2="2866.67">
                <stop stopColor="#888888" />
                <stop offset="1" stopColor="#D3D3D3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[37.5%_33.33%_41.67%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path d={svgPaths.pdb13a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.23958" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreateIcon2Similarity() {
  return (
    <div className="bg-white relative size-full" data-name="Create Icon2 Similarity">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[754px] py-0 relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}