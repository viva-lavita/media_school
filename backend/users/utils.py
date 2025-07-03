def is_russian(s):
    russian_alphabet = range(0x0410, 0x044F)  # диапазон кодов русского алфавита в Unicode
    return all(ord(c) in russian_alphabet for c in s if c.isalpha())
