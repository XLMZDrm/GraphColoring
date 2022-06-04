// #include <stdio.h>
// #include <conio.h>

// #define Max 50
// int a[Max][Max];
// int maucam[Max][Max];
// int tong_bac_dinh[Max];
// int dinh[Max];
// int mau_dinh[Max];
// int n;

// int docfile();
// void khoitao(); //luc dau cac dinh chua duoc to
// int kiemtra_maucam(int v, int mau);
// void tongbac();
// int dinh_bac_max();// tra ket quat ve vi tri cua dinh co bac cao nhat
// void chonmau(int v, int mau);
// void tomau();
// void xuat();

// int main()
// {
// 	khoitao();
// 	docfile();
// 	tongbac();
// 	xuat();
// 	tomau();
// 	getch();
// }
// // khoi tao gia tri ban dau cho mang mau_dinh,  gia tri bang -1 la chua duoc to
// void khoitao()
// {
// 	int i;
// 	for (i = 1; i <= n; i++)
// 		mau_dinh[i] = -1;
// }
// int docfile()
// {
// 	char tenfile[30];
// 	printf("nhap ten file:\t");
// 	gets(tenfile);
// 	int i, j;
// 	FILE *fp;
// 	fp = fopen(tenfile, "rt");
// 	if (fp == NULL)
// 	{
// 		printf("file khong ton tai!");
// 		return 0;
// 	}
// 	else
// 	{
// 		fscanf(fp, "%d", &n);
// 		for (i = 1; i <= n; i++)
// 		for (j = 1; j <= n; j++)
// 			fscanf(fp, "%d", &a[i][j]);
// 	}
// 	return 1;
// }
// // ham "tongbac()" tinh so bac cua moi dinh , roi dua vao mang tong_bac_dinh[]
// void tongbac()
// {
// 	int i, j;
// 	for (i = 1; i <= n; i++)
// 	{
// 		tong_bac_dinh[i] = 0;
// 		for (j = 1; j <= n; j++)
// 			tong_bac_dinh[i] = tong_bac_dinh[i] + a[i][j];
// 	}
// }
// // ham tra ve dinh co bac lon nhat
// int dinh_bac_max()
// {

// 	int max, vitri;
// 	int i;
// 	max = tong_bac_dinh[1];
// 	vitri = 1;
// 	for (i = 1; i <= n; i++)
// 	if (tong_bac_dinh[i]>max)
// 	{

// 		max = tong_bac_dinh[i];
// 		vitri = i;
// 	}

// 	return vitri;
// }
// // ham kiemra xem nhung mau nao se cam va khong to cho dinh dang xet
// int kiemtra_maucam(int v, int mau)
// {
// 	int i;
// 	for (i = 1; i <= n; i++)
// 	if (maucam[v][i] == mau) //
// 		return 1;
// 	return 0;
// }
// // ham se chon ra mau thich hop de to cho dinh dang xet
// int chonmau(int v)
// {
// 	int mau = 1;
// 	do
// 	{
// 		if (kiemtra_maucam(v, mau) == 0) // mau to cho dinh v phai khong trung voi mau cam
// 		{
// 			return mau;
// 			break;
// 		}
// 		else
// 			mau++;
// 	} while (1);
// }
// // thuc hien to mau cho cac dinh trong do thi
// void tomau()
// {

// 	int i, j;
// 	int dem = 1;
// 	int dinh_max;
// 	int daxet[Max];
// 	for (i = 1; i <= n; i++)
// 	{
// 		daxet[i] = -1; //xet xem dinh nao da duoc to mau hay chua to mau
// 	}
// 	for (i = 1; i <= n; i++)
// 	for (j = 1; j <= n; j++)
// 		maucam[i][j] = -1;// khoi tao mang hai chieu "maucam"va khoi tao gia tri bang dau=-1 tuc khong co dinh nao bi cam
// 	do{
// 		dinh_max = dinh_bac_max();
// 		mau_dinh[dinh_max] = chonmau(dinh_max);
// 		daxet[dinh_max] = 1;
// 		dem++;
// 		for (i = 1; i <= n; i++)
// 		{
// 			if ((a[dinh_max][i] == 1) && (daxet[i] != 1))
// 			{
// 				maucam[i][dinh_max] = mau_dinh[dinh_max]; //mau da to cho dinh_max se bi cam to cho cac dinh ke voi no
// 				tong_bac_dinh[i]--; //ha bac cac dinh xuong
// 			}
// 			if (tong_bac_dinh[i] == 0 && daxet[i] != 1)// luc nay xet xem sau khi ha bac neu dinh nao =0 va chua xet thi to luon
// 			{
// 				mau_dinh[i] = chonmau(i);
// 				daxet[i] = 1;
// 				dem++;
// 			}
// 		}
// 		tong_bac_dinh[dinh_max] = 0; // bac dinh da to duoc gan bang 0;

// 	} while (dem <= n);
// 	for (i = 1; i <= n; i++)
// 		printf("mau dinh %d:	%d\n", i, mau_dinh[i]);
// }
// void xuat()
// {
// 	int i, j;
// 	printf("\n so dinh la:%d\n", n);
// 	for (i = 1; i <= n; i++)
// 	{
// 		for (j = 1; j <= n; j++)
// 			printf("%d", a[i][j]);
// 		printf("\n");
// 	}
// }
