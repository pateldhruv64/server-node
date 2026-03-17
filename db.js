import mongoose from 'mongoose';

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_DB);
    console.log('mongo is rockybhai');
  } catch (error) {
    console.error('mongo juggaya salla', error);
    process.exit(1);
  }
};

export default db;


//process.exit(0) → Program successfully બંધ કર્યું
//process.exit(1) → Program error લીધા પછી બંધ કર્યું
