@echo off
echo ��ʼ���²��͡��������Ժ�
set d=%date:~0,10%
set t=%time:~0,8%
echo %d% %t%
git add .
git commit -m "%d% %t%"
git push origin master


echo ���͸������
echo. & pause