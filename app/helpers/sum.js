import { helper } from '@ember/component/helper';

export function sum(params) {
  return Number(params[0]) + params[1];
}
export default helper(sum);
