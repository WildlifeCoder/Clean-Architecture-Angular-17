export class BaseMapper {
  public static toDTO<T>(entity: T): T {
    return entity;
  }

  public static toEntity<T>(dto: T): T {
    return dto;
  }
}
