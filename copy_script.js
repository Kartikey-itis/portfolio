import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\welcome\\.gemini\\antigravity\\brain\\a005d00b-6d13-4aad-95b6-e453f32be86d';
const dest = 'a:\\Code\\AIweb\\my-react-app\\src\\assets\\images';

console.log('Starting copy...');

if (!fs.existsSync(dest)) {
    console.log('Creating directory...');
    fs.mkdirSync(dest, { recursive: true });
}

const files = [
    { from: 'hero_portrait_1768349276066.png', to: 'hero.png' },
    { from: 'architecture_minimal_1768349294355.png', to: 'bento1.png' },
    { from: 'hero_portrait_1768349276066.png', to: 'scatter1.png' },
    { from: 'architecture_minimal_1768349294355.png', to: 'scatter2.png' },
    { from: 'hero_portrait_1768349276066.png', to: 'scatter3.png' },
    { from: 'architecture_minimal_1768349294355.png', to: 'scatter4.png' },
    { from: 'hero_portrait_1768349276066.png', to: 'scatter5.png' }
];

files.forEach(f => {
    try {
        const srcPath = path.join(src, f.from);
        const destPath = path.join(dest, f.to);
        if (!fs.existsSync(srcPath)) {
            console.error(`Source file not found: ${srcPath}`);
            return;
        }
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${f.to} from ${srcPath}`);
    } catch (e) {
        console.error(`Failed to copy ${f.to}: ${e.message}`);
    }
});
