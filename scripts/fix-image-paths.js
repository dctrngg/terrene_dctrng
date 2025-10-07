const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (
      filePath.endsWith('.js') || 
      filePath.endsWith('.jsx') || 
      filePath.endsWith('.tsx') || 
      filePath.endsWith('.ts')
    ) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

function fixImagePaths() {
  const srcDir = path.join(__dirname, '../src');
  const files = getAllFiles(srcDir);
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Pattern 1: src="./path" hoặc src="../path"
    if (content.match(/src=["']\.\.?\//g)) {
      content = content.replace(
        /src=["'](\.\.?\/[^"']+)["']/g,
        (match, p1) => {
          modified = true;
          const cleanPath = p1.replace(/^\.\.?\//, '/');
          return `src={getAssetPath("${cleanPath}")}`;
        }
      );
    }

    // Pattern 2: url('./path') hoặc url('../path') trong CSS/styled
    if (content.match(/url\(['"]\.\.?\//g)) {
      content = content.replace(
        /url\(['"]?(\.\.?\/[^'")]+)['"]?\)/g,
        (match, p1) => {
          modified = true;
          const cleanPath = p1.replace(/^\.\.?\//, '/');
          return `url(\${getAssetPath("${cleanPath}")})`;
        }
      );
    }

    // Pattern 3: backgroundImage: "url(...)"
    if (content.match(/backgroundImage:\s*["']url\(\.\.?\//g)) {
      content = content.replace(
        /backgroundImage:\s*["']url\((\.\.?\/[^)]+)\)["']/g,
        (match, p1) => {
          modified = true;
          const cleanPath = p1.replace(/^\.\.?\//, '/');
          return `backgroundImage: \`url(\${getAssetPath("${cleanPath}")})\``;
        }
      );
    }

    if (modified) {
      // Thêm import nếu chưa có
      if (!content.includes('getAssetPath')) {
        const importStatement = 'import { getAssetPath } from "@/utils/getAssetPath";\n';
        content = importStatement + content;
      }
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
    }
  });
  
  console.log('✨ Done!');
}

fixImagePaths();