#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FILENAME = 'index.html';
const DEST_DIR = path.join(__dirname, 'amp');
const SRC_PATH = path.join(__dirname, FILENAME);
const DEST_PATH = path.join(DEST_DIR, FILENAME);

const BANNER = [
  '+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+',
  '|G O O G L E - A M P - T E M P L A T E|',
  '+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+',
  '|  ',
  '||',
  '||| Google-AMP-Template ',
  '||| Beta-Mary - version 0.1.5',
  '||| ',
  '||| Help this open-source project: ',
  '||| GitHub: https://github.com/tborges/google-amp-template',
  '|| ',
  '| '
].join('\n');

function logBanner() {
  console.log(`\n${BANNER}`);
}

async function ensureDestinationDirectory() {
  try {
    await fs.promises.mkdir(DEST_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create destination directory:', error);
    throw error;
  }
}

async function copyFile() {
  try {
    await fs.promises.copyFile(SRC_PATH, DEST_PATH);
    logBanner();
  } catch (error) {
    console.error('Failed to copy file:', error);
    throw error;
  }
}

async function main() {
  try {
    await ensureDestinationDirectory();
    await copyFile();
  } catch (error) {
    process.exitCode = 1;
  }
}

main();
