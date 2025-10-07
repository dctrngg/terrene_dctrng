export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/terrene' : '';
  // Đảm bảo path bắt đầu bằng /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}