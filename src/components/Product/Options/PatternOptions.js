import React from 'react';
import SingleImageOption from './SingleImageOption';

export default function PatternOptions({ options, setData, data }) {
  const optionsImages = options?.map((option) => (
    <SingleImageOption optionId={option} setData={setData} data={data} />
  ));
  return <ul class="pt-options-swatch js-change-img">{optionsImages}</ul>;
}
