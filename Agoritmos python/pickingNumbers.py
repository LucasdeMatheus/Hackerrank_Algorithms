def pickingNumbers(a):
    frequency = [0] * 100 
    max_length = 0

    for num in a:
        frequency[num] += 1

    for i in range(100 - 1):  
        max_length = max(max_length, frequency[i] + frequency[i + 1])

    return max_length


# Exemplo de uso:
a = [4, 6, 5, 3, 3, 1]
print(pickingNumbers(a))  # Saída esperada: 3
