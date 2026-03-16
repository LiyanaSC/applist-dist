import { importShared } from './__federation_fn_import-dmqIiFee.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {  };
const {createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


function _sfc_render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", null, _cache[0] || (_cache[0] = [
    _createElementVNode("h2", null, "Remote ListeView fonctionne", -1)
  ])))
}
const ListeView = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { _export_sfc as _, ListeView as default };
