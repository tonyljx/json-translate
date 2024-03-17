export function transformToJSONString(jsonValue: string) {
  // 首先，将字符串解析为一个对象
  const jsonObject = JSON.parse(jsonValue);

  // 然后，使用 JSON.stringify 将对象转换回字符串并格式化
  // 第三个参数指定缩进级别，这里我们使用 2 个空格
  const formattedJsonString = JSON.stringify(jsonObject, null, 2);
  return formattedJsonString;
}

export function formatJSON(val: string) {
  try {
    const res = JSON.parse(val);
    return JSON.stringify(res, null, 2);
  } catch {
    const errorJson = {
      error: `非法返回${val}`,
    };
    return JSON.stringify(errorJson, null, 2);
  }
}
