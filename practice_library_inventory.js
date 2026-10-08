const libraryInventory = [
  {
    bookCode: "B01",
    title: "Lập trình C Cơ bản",
    category: "IT",
    price: 150000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "Kệ A1",
  },
  {
    bookCode: "B02",
    title: "Cấu trúc dữ liệu & Giải thuật",
    category: "IT",
    price: 200000,
    totalCopies: 2,
    availableCopies: 0,
    shelfLocation: "Kệ A2",
  },
  {
    bookCode: "B03",
    title: "Toán Giải tích 1",
    category: "Toán",
    price: 120000,
    totalCopies: 10,
    availableCopies: 8,
    shelfLocation: "Kệ B1",
  },
];

console.log(
  "================================ DANH SÁCH ẤN BẢN BAN ĐẦU ================================",
);
console.table(libraryInventory);
const newBook = {
  bookCode: "B04",
  title: "JavaScript Nâng cao",
  category: "IT",
  price: 250000,
  totalCopies: 4,
  availableCopies: 4,
  shelfLocation: "Kệ A3",
};
libraryInventory.push(newBook);

console.log(
  "============================= SAU KHI NHẬP KHO SÁCH MỚI (B04) ============================",
);
console.table(libraryInventory);

console.log("--- THỰC HIỆN GIAO DỊCH MƯỢN SÁCH B01 ---");
let indexB01 = -1;
for (let i = 0; i < libraryInventory.length; i++) {
  if (libraryInventory[i].bookCode === "B01") {
    indexB01 = i;
    break;
  }
}

if (indexB01 !== -1) {
  if (libraryInventory[indexB01].availableCopies > 0) {
    libraryInventory[indexB01].availableCopies -= 1;
    console.log("-> Mượn sách thành công: " + libraryInventory[indexB01].title);

    if (libraryInventory[indexB01].availableCopies === 0) {
      console.log("-> THÔNG BÁO: Đầu sách B01 hiện đã HẾT SÁCH TRÊN KỆ!");
    }
  } else {
    console.log(
      "-> TỪ CHỐI GIAO DỊCH: Sách B01 hiện đang hết (0 cuốn khả dụng).",
    );
  }
}

let indexB02 = -1;
for (let i = 0; i < libraryInventory.length; i++) {
  if (libraryInventory[i].bookCode === "B02") {
    indexB02 = i;
    break;
  }
}

if (indexB02 !== -1) {
  libraryInventory.splice(indexB02, 1);
  console.log("-> Đã thanh lý thành công sách B02 khỏi kho lưu trữ.");
}

console.log(
  "==================== DANH SÁCH ẤN BẢN SAU GIAO DỊCH MƯỢN & THANH LÝ ====================",
);
console.table(libraryInventory);

let totalBooksInStock = 0;
let totalAssetValue = 0;

for (let i = 0; i < libraryInventory.length; i++) {
  totalBooksInStock += libraryInventory[i].totalCopies;

  let bookAssetValue =
    libraryInventory[i].totalCopies * libraryInventory[i].price;
  totalAssetValue += bookAssetValue;
}

console.log(
  "============================= BÁO CÁO KIỂM KÊ TÀI SẢN =============================",
);
console.log(
  `- Tổng số lượng đầu sách đang quản lý : ${libraryInventory.length} đầu sách.`,
);
console.log(
  `- Tổng quy mô số lượng cuốn sách      : ${totalBooksInStock} cuốn.`,
);
console.log(
  `- Tổng giá trị tài sản kho tri thức   : ${totalAssetValue.toLocaleString("vi-VN")} VNĐ.`,
);
console.log(
  "===================================================================================",
);
