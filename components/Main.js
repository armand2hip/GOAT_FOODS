import * as views from "./views";

console.log(views.Menu);
export default (st) => `
${views[st.page](st)}
`;
