export function generateRandomValues()
{
    return {
        randomX : Math.floor(Math.random() * 35) - 15,
        randomY : Math.floor(Math.random() * 25) - 10,
        randomSpeed : Math.random() * (1.5 - 0.8) + 0.8,
        randomSize : Math.random() * (0.8 - 0.1) + 0.1 
    }
}