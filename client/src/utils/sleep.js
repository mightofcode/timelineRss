
//
// export const sleep = async (time) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// };
export default function sleep(time){
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
