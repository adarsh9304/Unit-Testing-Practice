const userService = require('../userService.js');
const logger = require('../logger.js');

// Mock the fetchUser function
jest.mock('../userService.js');

test('logUserName logs the correct user name', async () => {
  // Arrange
  const mockUser = { id: 1, name: 'Adarsh' };
  userService.fetchUser.mockResolvedValue(mockUser);

  // Act
  const userName = await logger.logUserName(1);

  // Assert
  expect(userService.fetchUser).toHaveBeenCalledWith(1);
  expect(userService.fetchUser).toHaveBeenCalledTimes(1);
  expect(userName).toBe('Adarsh');
});

// test('logUserName handles missing user name', async () => {
//   // Arrange
//   const mockUser = { id: 1 };
//   userService.fetchUser.mockResolvedValue(mockUser);

//   // Act
//   const userName = await logger.logUserName(1);

//   // Assert
//   expect(userService.fetchUser).toHaveBeenCalledWith(1);
//   expect(userService.fetchUser).toHaveBeenCalledTimes(1);
//   expect(userName).toBe(undefined);
// });
