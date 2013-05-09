#!/usr/bin/runhaskell
import Data.List
import System.Environment
import Control.Applicative

main = do [from, to] <- map read <$> getArgs
          putStrLn . intercalate ", " . map fizzbuzz $ [from..to]

fizzbuzz n | fizz n && buzz n = "Fizz Buzz"
           | fizz n           = "Fizz"
           | buzz n           = "Buzz"
           | otherwise        = show n
    where fizz n = n `mod` 3 == 0
          buzz n = n `mod` 5 == 0
