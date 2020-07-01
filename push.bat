@echo off
echo 开始更新博客。。。请稍后

git add .
git commit -m "data"
git push origin master


echo 博客更新完成
echo. & pause